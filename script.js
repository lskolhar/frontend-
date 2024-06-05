import{ items } from "./data.js";
const formEle = document.getElementById("item-form");
const listEle = document.getElementById("list-container");
const placeInput = document.getElementById("place");
const imageInput = document.getElementById("image");
const locationInput = document.getElementById("location");
const linkInput = document.getElementById("link");
const dateInput = document.getElementById("date");

function renderlist(){
    listEle.innerHTML=items.map(
        (item))=>
        <div class="card">
          <img
            src="${item.image}  alt="${item.place}"
          />
          <div class="card-content">
            <div class="card-header">
              <div class="card-header-text">
                <a
                  target="_blank"
                  href="https://www.indiatajmahaltour.com/holiday-packages/taj-mahal-tours-from-bangalore.htm"
                  >Taj Mahal</a
                >
                <p>Agra, India</p>
              </div>
              <div class="card-header-actions">
                <button>
                  <img src="./assets/edit-icon.svg" alt="edit-button" />
                </button>
                <button>
                  <img src="./assets/trash-icon.svg" alt="delete-button" />
                </button>
              </div>
            </div>
            <p>
              ${item.plan}
            </p>
            <p class="card-footer">26 May 2024</p>
          </div>
        </div>
}
