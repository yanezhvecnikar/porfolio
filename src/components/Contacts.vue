<template>
    <section class="contact">
        <div class="contact-container">
            <div class="contact-box">
                <h2>Напишите мне</h2>
                <p class="desc">Если у вас есть вопросы, предложения, идеи для сотрудничества или просто хотите
                    пообщаться —
                    напишите мне. Я с радостью отвечу и постараюсь помочь в ближайшее время.</p>
                <div class="contact-detail">
                    <i class="fa-solid fa-phone"></i>
                    <div class="detail">
                        <p>Телефон:</p>
                        <p>+7 (919) 451-86-84</p>
                    </div>
                </div>
                <div class="contact-detail">
                    <i class="fa-solid fa-envelope-circle-check"></i>
                    <div class="detail">
                        <p>Email:</p>
                        <p>euorik@yandex.com</p>
                    </div>
                </div>
                <div class="contact-detail">
                    <i class="fa-brands fa-telegram"></i>
                    <div class="detail">
                        <p>Telegram:</p>
                        <p>@euoriks</p>
                    </div>
                </div>
            </div>
            <div class="contact-box">
                <form action="">
                    <h2 class="heading">Напишите<span>мне</span></h2>
                    <div class="field-box">
                        <input type="text" placeholder="Full Name" required>
                        <input type="email" placeholder="Email Adress" required>
                        <input type="text" placeholder="Phone Number" required>
                        <input type="text" placeholder="Email Subject" required>
                        <textarea name="" id="" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Отправить сообщение</button>
                </form>
            </div>
        </div>
    </section>
</template>
