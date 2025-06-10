const correctPassword = "chongqing2025";
const attractions = [
    { 
        name: "洪崖洞", 
        description: "重慶特色吊腳樓建築，夜景迷人。", 
        itinerary: "漫步洪崖洞，欣賞吊腳樓夜景，品嚐地道重慶小吃，感受巴渝文化。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%E9%87%8D%E5%BA%86%E6%B4%AA%E5%B4%96%E6%B4%9E.jpg/500px-%E9%87%8D%E5%BA%86%E6%B4%AA%E5%B4%96%E6%B4%9E.jpg" 
    },
    { 
        name: "解放碑", 
        description: "重慶市中心地標，購物熱點。", 
        itinerary: "遊覽解放碑步行街，購物美食兩不誤，體驗重慶繁華都市氛圍。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Jiefangbei_2020-08-13.jpg/500px-Jiefangbei_2020-08-13.jpg" 
    },
    { 
        name: "磁器口古鎮", 
        description: "千年古鎮，體驗重慶傳統文化。", 
        itinerary: "探索磁器口古鎮，品嚐麻花小吃，購買手工藝品，感受千年歷史。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%E7%A3%81%E5%99%A8%E5%8F%A3%E5%AE%A2%E8%BF%90%E7%A0%81%E5%A4%B4%E7%99%BB%E8%88%B9%E5%A4%842024%E5%B9%B4.jpg/500px-%E7%A3%81%E5%99%A8%E5%8F%A3%E5%AE%A2%E8%BF%90%E7%A0%81%E5%A4%B4%E7%99%BB%E8%88%B9%E5%A4%842024%E5%B9%B4.jpg" 
    },
    { 
        name: "南山一棵樹", 
        description: "俯瞰重慶夜景的最佳地點。", 
        itinerary: "登南山一棵樹觀景台，俯瞰重慶璀璨夜景，拍攝城市全景照片。",
        image: "EF273ACA5067EEC75ADBE189DAA_9F2EB277_C4DEB.png" 
    },
    { 
        name: "長江索道", 
        description: "橫跨長江，體驗空中之旅。", 
        itinerary: "乘坐長江索道，空中俯瞰長江兩岸，體驗重慶獨特的交通方式。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%E9%87%8D%E5%BA%86_%E9%95%BF%E6%B1%9F%E4%B8%8A%E7%9A%84%E6%B8%A1%E6%B1%9F%E7%B4%A2%E9%81%931_-_panoramio.jpg/500px-%E9%87%8D%E5%BA%86_%E9%95%BF%E6%B1%9F%E4%B8%8A%E7%9A%84%E6%B8%A1%E6%B1%9F%E7%B4%A2%E9%81%931_-_panoramio.jpg" 
    },
    { 
        name: "三峽博物館", 
        description: "了解重慶歷史與三峽文化。", 
        itinerary: "參觀三峽博物館，了解重慶歷史，欣賞三峽文物，感受文化底蘊。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Chongqing_Zhongguo_Sanxia_Bowuguan_2014.04.21_11-11-06.jpg/500px-Chongqing_Zhongguo_Sanxia_Bowuguan_2014.04.21_11-11-06.jpg" 
    },
    { 
        name: "大足石刻", 
        description: "世界文化遺產，精美石雕藝術。", 
        itinerary: "探訪大足石刻，欣賞世界文化遺產，感受唐宋石雕藝術的精髓。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/%E5%A4%A7%E8%B6%B3%E7%9F%B3%E5%88%BB.JPG/500px-%E5%A4%A7%E8%B6%B3%E7%9F%B3%E5%88%BB.JPG" 
    },
    { 
        name: "武隆喀斯特", 
        description: "壯麗喀斯特地貌，自然奇觀。", 
        itinerary: "遊覽武隆喀斯特地貌，探索天生三橋，感受大自然的鬼斧神工。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wulongtianshengsanqiao.JPG/500px-Wulongtianshengsanqiao.JPG" 
    }
];

// 密碼驗證
document.getElementById("submitPassword").addEventListener("click", () => {
    const input = document.getElementById("passwordInput").value;
    if (input === correctPassword) {
        document.getElementById("passwordPage").classList.add("hidden");
        document.getElementById("mainPage").classList.remove("hidden");
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
    }
});

// 動態生成景點卡片
const attractionsContainer = document.getElementById("attractions");
attractions.forEach(attraction => {
    const card = document.createElement("div");
    card.className = "attraction-card p-4 bg-white";
    card.innerHTML = `
        <img src="${attraction.image}" alt="${attraction.name}">
        <h3 class="text-lg font-bold mt-2">${attraction.name}</h3>
        <p class="text-sm text-gray-600">${attraction.description}</p>
        <input type="checkbox" class="mt-2" data-name="${attraction.name}">
    `;
    attractionsContainer.appendChild(card);
});

// 限制最多選擇4個景點
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
        if (checkedCount > 4) {
            checkbox.checked = false;
            alert("最多只能選擇4個景點！");
        }
        updateCardStyles();
    });
});

// 更新卡片樣式
function updateCardStyles() {
    document.querySelectorAll(".attraction-card").forEach(card => {
        const checkbox = card.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            card.classList.add("selected");
        } else {
            card.classList.remove("selected");
        }
    });
}

// 分配時間
function assignTimeSlots(count) {
    if (count === 1) return [{ start: "10:00", end: "12:00" }];
    if (count === 2) return [{ start: "10:00", end: "12:00" }, { start: "14:00", end: "16:00" }];
    if (count === 3) return [{ start: "09:00", end: "11:00" }, { start: "11:30", end: "13:30" }, { start: "14:30", end: "16:30" }];
    return [{ start: "09:00", end: "10:30" }, { start: "11:00", end: "12:30" }, { start: "14:00", end: "15:30" }, { start: "16:00", end: "17:30" }];
}

// 生成行程
document.getElementById("generateItinerary").addEventListener("click", () => {
    const selectedAttractions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.dataset.name);
    const itineraryList = document.getElementById("itineraryList");
    itineraryList.innerHTML = "";
    if (selectedAttractions.length === 0) {
        alert("請至少選擇一個景點！");
        return;
    }
    const timeSlots = assignTimeSlots(selectedAttractions.length);
    selectedAttractions.forEach((name, index) => {
        const attraction = attractions.find(attr => attr.name === name);
        const li = document.createElement("li");
        li.innerHTML = `<strong>第${index + 1}站 (${timeSlots[index].start} - ${timeSlots[index].end})：${name}</strong> - ${attraction.itinerary}`;
        itineraryList.appendChild(li);
    });
    document.getElementById("itineraryResult").classList.remove("hidden");
});

// 取消行程
document.getElementById("cancelItinerary").addEventListener("click", () => {
    // 清除所有選中的checkbox
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    // 清空行程列表
    document.getElementById("itineraryList").innerHTML = "";
    // 隱藏行程結果區域
    document.getElementById("itineraryResult").classList.add("hidden");
    // 更新卡片樣式
    updateCardStyles();
});
