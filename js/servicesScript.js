// Array of FAQ items
const faqItems = [
    {
        question: "Які основні напрями роботи департаменту?",
        answer: "Наш департамент займається координацією міжнародної оборонної співпраці, включаючи організацію навчань, переговорів та стратегічних проектів."
    },
    {
        question: "Як можна долучитися до міжнародних освітніх програм?",
        answer: "Для участі у програмах навчання чи стажування необхідно подати заявку через наш офіційний сайт або звернутися до нашого контактного центру."
    },
    {
        question: "Чи організовуєте ви миротворчі місії?",
        answer: "Так, ми координуємо участь українських військових у міжнародних миротворчих місіях під егідою ООН, НАТО та інших організацій."
    },
    {
        question: "Які проекти співпраці з іноземними партнерами ви реалізуєте?",
        answer: "Ми реалізуємо проекти в сфері обміну досвідом, спільних навчань, стратегічного планування та постачання обладнання."
    },
    {
        question: "Чи доступні мовні курси для військових?",
        answer: "Так, ми організовуємо мовні курси для військовослужбовців, які працюють з міжнародними партнерами."
    },
    {
        question: "Як дізнатися про майбутні заходи чи конференції?",
        answer: "Інформація про заплановані заходи публікується на нашому офіційному сайті та у соціальних мережах."
    },
    {
        question: "Чи можлива участь у спільних військових навчаннях з іншими країнами?",
        answer: "Так, ми організовуємо спільні навчання для підвищення кваліфікації українських військових у взаємодії з союзниками."
    },
    {
        question: "Які способи комунікації з департаментом доступні?",
        answer: "Ви можете зв'язатися з нами через електронну пошту, телефон або скористатися контактною формою на нашому сайті."
    }
];

// Function to dynamically generate FAQ items
const generateFAQItems = () => {
    const accordionContainer = document.getElementById('faqAccordion');
    faqItems.forEach(item => {
        // Create accordion item
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        // Create button for the question
        const button = document.createElement('button');
        button.classList.add('accordion-button');
        button.textContent = item.question;

        // Create content for the answer
        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.innerHTML = `<p>${item.answer}</p>`;

        // Append button and content to the accordion item
        accordionItem.appendChild(button);
        accordionItem.appendChild(content);

        // Append the accordion item to the accordion container
        accordionContainer.appendChild(accordionItem);
    });
};

// Call the function to generate FAQ items
generateFAQItems();

// Add event listeners for the accordion functionality
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;

        // Toggle the open class
        accordionItem.classList.toggle('open');

        // Toggle the content visibility
        const content = accordionItem.querySelector('.accordion-content');
        content.classList.toggle('show');
    });
});
// Array of achievements
const achievements = [
    "Успішна координація міжнародних навчань за участі збройних сил країн-партнерів.",
    "Організація понад 50 миротворчих місій за участю українських військовослужбовців.",
    "Налагодження стратегічних оборонних відносин з провідними країнами світу.",
    "Розробка спільних проектів з партнерами для модернізації оборонних технологій України.",
    "Проведення міжнародних конференцій і форумів з питань безпеки та співпраці.",
    "Підготовка понад 10,000 військових спеціалістів за програмами мовної та професійної підготовки."
];


// Function to dynamically generate achievements
const generateAchievements = () => {
    const achievementsList = document.getElementById('achievementsList');
    
    achievements.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.classList.add('achievement');
        
        const achievementText = document.createElement('p');
        achievementText.textContent = achievement;
        
        achievementDiv.appendChild(achievementText);
        achievementsList.appendChild(achievementDiv);
    });
};

// Call the function to generate achievements
generateAchievements();
// Array of testimonials
const testimonials = [
    {
        name: "Олександр Г.",
        text: `"Участь у міжнародних навчаннях дозволила мені покращити свої навички та дізнатися багато нового про сучасні оборонні технології. Дякую за організацію!"`,
        imgSrc: "../img/profile.png",
        alt: "Олександр Г."
    },
    {
        name: "Лідія В.",
        text: `"Завдяки освітнім програмам департаменту я змогла вдосконалити знання англійської мови, що допомогло мені у спілкуванні з міжнародними партнерами."`,
        imgSrc: "../img/profile.png",
        alt: "Лідія В."
    },
    {
        name: "Дмитро С.",
        text: `"Моя участь у миротворчій місії під егідою НАТО стала надзвичайним досвідом. Професійна підготовка, яку я отримав, була на найвищому рівні."`,
        imgSrc: "../img/profile.png",
        alt: "Дмитро С."
    },
    {
        name: "Ірина К.",
        text: `"Співпраця з міжнародними експертами через проекти департаменту допомогла нам створити ефективну стратегію оборонної логістики. Дякуємо за підтримку!"`,
        imgSrc: "../img/profile.png",
        alt: "Ірина К."
    }
];


// Function to generate testimonial cards
const generateTestimonials = () => {
    const testimonialsList = document.getElementById('testimonialsList');
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('card', 'mb-4');
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex');
        
        const img = document.createElement('img');
        img.src = testimonial.imgSrc;
        img.alt = testimonial.alt;
        img.classList.add('avatar', 'img-fluid', 'rounded-circle');
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.style.marginRight = "15px";
        
        const textContainer = document.createElement('div');
        
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = testimonial.name;
        
        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = testimonial.text;
        
        textContainer.appendChild(title);
        textContainer.appendChild(text);
        
        cardBody.appendChild(img);
        cardBody.appendChild(textContainer);
        
        testimonialCard.appendChild(cardBody);
        
        testimonialsList.appendChild(testimonialCard);
    });
};


// Масив з останніми новинами
const newsArray = [
    { title: "Новина 1: Заголовок новини", link: "#" },
    { title: "Новина 2: Заголовок новини", link: "#" },
    { title: "Новина 3: Заголовок новини", link: "#" },
    { title: "Новина 4: Заголовок новини", link: "#" },
    { title: "Новина 5: Заголовок новини", link: "#" },
];

// Функція для додавання новин у список
function loadNews() {
    const newsList = document.getElementById("news-list");

    newsArray.forEach(news => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = news.link;
        a.textContent = news.title;
        li.appendChild(a);
        newsList.appendChild(li);
    });
}

// Завантаження новин при завантаженні сторінки
window.onload = loadNews;

// Call the function to generate the testimonials
generateTestimonials();
