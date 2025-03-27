<script lang="ts" setup>

</script>

<template>
    <div class="login">
        <div class="login-container">
            <div class="login-title">
                <h1>Đăng nhập hệ thống</h1>
            </div>
            <div class="login-form">
                <div class="form-group">
                    <label for="username">Tên đăng nhập</label>
                    <input type="text" id="username" placeholder="Tên đăng nhập">
                </div>
                <div class="form-group">
                    <label for="password">Mật khẩu</label>
                    <input type="password" id="password" placeholder="Mật khẩu">
                </div>
                <div class="option">
                    <div class="remember-me">
                        <input type="checkbox" id="remember-me">
                        <label for="remember-me">Ghi nhớ tôi</label>
                    </div>
                    <div class="forgot-password">
                        <a href="#">Quên mật khẩu?</a>
                    </div>
                </div>       
                <button class="login-button">Đăng nhập</button>             
            </div>
            <div class="divider">
                <span>Or</span>
            </div>
            <div class="social-login">
                <div class="social-login-button">
                    <i class="fa-brands fa-google"></i>
                </div>
                <div class="social-login-button">
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
            <div class="register-link">
                <p>Bạn chưa có tài khoản? <a href="#">Đăng ký</a></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    padding: 30px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.2);

    .login-title {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 30px;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 10px;

        label {
            font-size: 16px;
        }

        input {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            box-shadow: none;
        }
    }

    .option {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            color: red;
            text-decoration: none;
            font-size: 12px;
            font-weight: bold;
        }

        .remember-me {
            display: flex;
            align-items: end;
            gap: 2px;
            font-size: 12px;
            font-weight: bold;

            input[type="checkbox"] {
                width: 12px;
                height: 12px;
                position: relative;
                top: 2px;
            }
        }
    }    

    .login-button {
        background-color: #40a02b;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #4ebe35;
        }
    }

    .divider {
        height: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        background-color: #e4e3e3;

        span {
            background-color: white;
            padding: 0 3px;
            font-size: 12px;
            font-weight: bold;
        }
    }

    .social-login {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;

        .social-login-button {
            background-color: #fff;
            border-radius: 50%;
            border: 1px solid #c0bfbf;
            padding: 5px;
            cursor: pointer;

            &:hover {
                background-color: #c0bfbf;
            }
        }
    }

    .register-link {
        text-align: center;
        font-size: 12px;

        a {
            color: red;
            text-decoration: none;
            font-weight: bold;
        }
    }
}

</style>