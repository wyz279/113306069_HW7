document.getElementById("edit-name-btn").addEventListener("click", function () {
	const button = this;
	const nameElement = document.getElementById("user-name");

	if (button.innerText === "edit") {
		const input = document.createElement("input");
		input.type = "text";
		input.value = nameElement.innerText;
		input.id = "name-input";

		nameElement.replaceWith(input);
		button.innerText = "save";
	} else {
		const input = document.getElementById("name-input");
		const newName = document.createElement("h1");
		newName.id = "user-name";
		newName.innerText = input.value;

		input.replaceWith(newName);
		button.innerText = "edit";
	}
});
document.getElementById("add-music-btn").addEventListener("click", function () {
    // 如果表單已存在，避免重複新增
    if (document.getElementById("music-form")) {
        return;
    }

    // 創建表單
    const form = document.createElement("div");
    form.id = "music-form";
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "flex-start";
    form.style.padding = "10px";
    form.style.border = "1px solid #ccc";
    form.style.background = "#fff";
    form.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
    form.style.marginTop = "10px";
    form.style.width = "200px"; // 調整表單寬度
    form.style.fontSize = "12px"; // 調整字體大小，縮小整體比例

    // 表單內 HTML
    form.innerHTML = `
        <label>Music Link:</label>
        <input type="url" id="music-link" required style="margin: 5px 0; padding: 5px; width: 100%; font-size: 12px;" />
        <label>Music Name:</label>
        <input type="text" id="music-name" required style="margin: 5px 0; padding: 5px; width: 100%; font-size: 12px;" />
        <button type="button" id="submit-music" style="padding: 5px 10px; font-size: 12px; margin-top: 5px;">Submit</button>
    `;

    // 插入表單到按鈕後面
    this.after(form);

    // 添加提交按鈕的事件
    document.getElementById("submit-music").addEventListener("click", function () {
        const link = document.getElementById("music-link").value.trim();
        const name = document.getElementById("music-name").value.trim();

        if (link && name) {
            // 獲取音樂列表
            const musicList = document.querySelector(".favorite-music");

            // 新增音樂項目
            const newMusicItem = document.createElement("div");
            newMusicItem.classList.add("music-item");
            newMusicItem.style.display = "flex";
            newMusicItem.style.flexDirection = "column";
            newMusicItem.style.alignItems = "center";
            newMusicItem.style.textAlign = "center";
            newMusicItem.style.margin = "10px";

            newMusicItem.innerHTML = `
                <a href="${link}" target="_blank">
                    <img src="musicLogo.png" alt="music logo" style="width: 80px; margin: 5px;">
                </a>
                <p style="font-size: 15px; margin: 0;">${name}</p>
            `;

            musicList.appendChild(newMusicItem);

            // 移除表單
            form.remove();
        } else {
            alert("Please fill out all fields!");
        }
    });
});
