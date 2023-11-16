class Testimonial {
    constructor(name, review, image) {
        this.name = name;
        this.review = review;
        this.image = image;
    }

    html() {
        return `
            <div class="testimonial">
                <img src="${this.image}" class="profile-testimonial" />
                <p class="quote">"${this.review}"</p>
                <p class="author">- ${this.name}</p>
            </div>
        `;
    }
}

const testimonials = [
    new Testimonial("Surya Elidanto", "Mantap sekali jasanya!", "https://images.pexels.com/photos/19040835/pexels-photo-19040835/free-photo-of-pria-jalan-jaket-potret.jpeg?auto=compress&cs=tinysrgb&w=600gi"),
    new Testimonial("Surya elz", "Keren lah pokonya!", "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600"),
    new Testimonial("Ujang karbu", "Wuhuu Keren lah!", "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600")
];

let testimonialsContainer = document.getElementById("testimonials");
testimonials.forEach(testimonial => {
    testimonialsContainer.innerHTML += testimonial.html();
});
