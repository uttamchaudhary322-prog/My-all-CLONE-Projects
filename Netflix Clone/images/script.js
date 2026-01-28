function scrollbar(image) {
    let trendingClass = document.querySelector(".trending-flex");
    trendingClass.addEventListener('wheel', (e) => {
        if (e.shiftKey) {
            e.preventDefault();
            trendingClass.scrollLeft += e.deltaY*5;
        }
    }, { passive: false });

    let leftScroll = document.createElement("div");
    leftScroll.id = `scroll-left`
    leftScroll.innerHTML = `${image}`;
    trendingClass.prepend(leftScroll);
    leftScroll.addEventListener('click', () => {
        trendingClass.scrollBy({ left: -trendingClass.clientWidth, behavior: 'smooth' });
    });
    if (trendingClass.scrollLeft === 0) {
        leftScroll.style.display = 'none';
        leftScroll.style.width = '0';
    }
    trendingClass.addEventListener('scroll', () => {
        if (trendingClass.scrollLeft === 0) {
            leftScroll.style.width = '0';
            leftScroll.addEventListener('transitionend', () => {
                leftScroll.style.display = 'none';
            }, { once: true });
        } else {
            leftScroll.style.display = 'block';
            setTimeout(() => {
                leftScroll.style.width = '1.8rem';
            }, 10);
        }
    });

    let rightScroll = document.createElement("div");
    rightScroll.id = `scroll-right`;
    rightScroll.innerHTML = `${image}`;
    trendingClass.append(rightScroll);
    rightScroll.addEventListener('click', () => {
        trendingClass.scrollBy({ left: trendingClass.clientWidth, behavior: 'smooth' })
    });
    if (trendingClass.scrollLeft + trendingClass.clientWidth + 1 >= trendingClass.scrollWidth) {
        rightScroll.style.display = "none";
        rightScroll.style.maxWidth = '0';
    }
    trendingClass.addEventListener('scroll', () => {
        if (trendingClass.scrollLeft + trendingClass.clientWidth + 1 >= trendingClass.scrollWidth) {
            rightScroll.style.width = '0';
            rightScroll.addEventListener('transitionend', () => {
                rightScroll.style.display = "none";
            }, { once: true });
        } else {
            rightScroll.style.display = "block";
            setTimeout(() => {
                rightScroll.style.width = '1.8rem';
            }, 10);
        }
    });
}

scrollbar("<img src='image/arrow-next-small-svgrepo-com.svg' alt='right'>");

function DropDown(id, content2, content3) {
    let ask = document.querySelector("#ask-question-" + id).firstElementChild;
    ask.addEventListener("click", () => {
        let quest = document.querySelector("#ask-question-" + id);
        let existingPara = quest.querySelector("p");
        if (existingPara) {
            quest.querySelector("span img").style.transform = "rotate(0deg)";
            existingPara.style.maxHeight = '0px';
            existingPara.addEventListener('transitionend', () => {
                quest.removeChild(existingPara);
            }, { once: true });
        } else {
            let para = document.createElement("p");
            para.innerHTML = `${content2}${content3}`;
            para.style.maxHeight = '0px';
            para.style.overflow = 'hidden';
            quest.append(para);
            para.offsetHeight;
            para.style.maxHeight = para.scrollHeight + 'px';
            quest.querySelector("span img").style.transform = "rotate(45deg)";
            quest.querySelector("span img").style.transition = "transform 0.3s ease";
        }
    });
};

DropDown("1", "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.", " <br><br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!")



DropDown("2", "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.", "")

DropDown("3", "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.", "<br><br>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.")

DropDown("4", "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.", "")

DropDown("5", "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.", "")

DropDown("6", "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.", "<br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.")