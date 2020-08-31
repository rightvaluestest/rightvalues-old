function getCookie (name) {
    let value = '; ' + document.cookie
    let parts = value.split('; ' + name + '=')
    if (parts.length === 2) return parts.pop().split(';').shift()
}
function setCookie (cname, cvalue, exhours) {
    let d = new Date()
    d.setTime(Date.now() + (exhours * 60 * 60 * 1000))
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}
function setBodyClassUserLang(userLang) {
  document.getElementsByTagName('body')[0].classList.add(`__i18n-${userLang}`)
}

const langElements = document.querySelectorAll('[data-i18n]')
const userLang = getCookie("lang") || navigator.language || navigator.userLanguage
setBodyClassUserLang(userLang)

const languages = [
    {
        "name": "english",
        "code": "en"
    },
    {
        "name": "deutsch",
        "code": "de"
    },
    {
        "name": "korean",
        "code": "ko"
    }
]
const i18n = {
    getString(name, arguments=null) {
        if (userLang in i18n[name]) {
             if (arguments) {
                 return i18n[name][userLang](...arguments)
             }
             return i18n[name][userLang]
        }
        if (arguments) {
            return i18n[name]["en"](...arguments)
        }
        return i18n[name]["en"]  
    },
    "lang": userLang,
    
       "result-a-label": {
        "en": ["Reactionary","Progressive","Reformist","Neutral","Conservative","Traditionalist","Reactionary"],
        "de": ["Reactionary","Progressive","Reformist","Neutral","Conservative","Traditionalist","Reactionary"],
        "ko": ["Reactionary","Progressive","Reformist","Neutral","Conservative","Traditionalist","Reactionary"]
    },
    "result-b-label": {
        "en": ["Planned Economy","Interventionist","Regulationist","Neutral","Limited Regulation","Free-Markets","Laissez-faire"],
        "de": ["Planned Economy","Interventionist","Regulationist","Neutral","Limited Regulation","Free-Markets","Laissez-faire"],
        "ko": ["Planned Economy","Interventionist","Regulationist","Neutral","Limited Regulation","Free-Markets","Laissez-faire"]
    },
    "result-c-label": {
        "en": ["Totalitarian","Authoritarian","Statist","Neutral","Democratic","Libertarian","Anarchist"],
        "de": ["Totalitarian","Authoritarian","Statist","Neutral","Democratic","Libertarian","Anarchist"],
        "ko": ["Totalitarian","Authoritarian","Statist","Neutral","Democratic","Libertarian","Anarchist"]
    },
    "result-d-label": {
        "en": ["Relativist","Particularist","Pacifist","Neutral","Diplomatic Interventionism","Universalism","Imperialism"],
        "de": ["Relativist","Particularist","Pacifist","Neutral","Diplomatic Interventionism","Universalism","Imperialism"],
        "ko": ["Relativist","Particularist","Pacifist","Neutral","Diplomatic Interventionism","Universalism","Imperialism"]
    },
    "result-e-label": {
        "en": ["Theocrat","Religious Authoritarianism","Religious Influence","Neutral","Anti-clericalism","Secular State","Antitheism"],
        "de": ["Theocrat","Religious Authoritarianism","Religious Influence","Neutral","Anti-clericalism","Secular State","Antitheism"],
        "ko": ["Theocrat","Religious Authoritarianism","Religious Influence","Neutral","Anti-clericalism","Secular State","Antitheism"]
    },
    "result-f-label": {
        "en": ["Transhumanism","Accelerationism","Pro-Technology","Neutral","Humanism","Decelerationism","Primitivism"],
        "de": ["Transhumanism","Accelerationism","Pro-Technology","Neutral","Humanism","Decelerationism","Primitivism"],
        "ko": ["Transhumanism","Accelerationism","Pro-Technology","Neutral","Humanism","Decelerationism","Primitivism"]
    },
    "result-g-label": {
        "en": ["Identitarian","Ethnic Nationalist","Race Realist","Neutral","Racial Equality","Anti-Racism","Racial Color Blindness"],
        "de": ["Identitarian","Ethnic Nationalist","Race Realist","Neutral","Racial Equality","Anti-Racism","Racial Color Blindness"],
        "ko": ["Identitarian","Ethnic Nationalist","Race Realist","Neutral","Racial Equality","Anti-Racism","Racial Color Blindness"]
    },
    
    "result-back": {
        "en": "Back",
        "de": "Back",
        "ko": "Back"
    }
}

langElements.forEach((element) =>  {
    let value = element.getAttribute("data-i18n")
    if (value in i18n && userLang in i18n[value]) {
        element.innerHTML = i18n[value][userLang]
    }
})

let langPicker = document.getElementById("langPicker")
languages.forEach(language => {
    let option = document.createElement("option");
    option.text = language.name
    option.value = language.code
    langPicker.add(option); 
})
if (langPicker) {
    for (let option of langPicker.options) {
        if(option.value == userLang) {
            langPicker.value = userLang
        }
    }
        
    langPicker.onchange = function() {
        let language = langPicker.options[langPicker.selectedIndex].value
        setCookie("lang", language, 5)
        location.reload()
    }   
}
