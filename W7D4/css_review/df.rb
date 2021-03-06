def login!(user)
  session[:session_token] = user.reset_session_token!
end
helper_method :current_user

def current_user
  @current_user ||= User.find_by(session_token: session[:session_token])
end

def login!(user)
  session[:session_token] = user.reset_session_token!
end
def logout!
  current_user.reset_session_token! if current_user
  session[:session_token] = nil
  @current_user = nil
end

def logged_in?
  !current_user.nil?
end

def require_logged_in
  redirect_to new_session_url if logged_in?
end

def require_logged_out
  redirect_to users_url if !logged_in?
end

validates :password 

attr_reader :password

after_initialize :ensure_session_token

def reset_session_token!
  self.session_token = SecureRandom::urlsafe_base64
  self.save!
  self.session_token
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def ensure_session_token
  self.session_token ||= SecureRandom::urlsafe_base64
end

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  user && user.is_password?(password) ? user : nil
end