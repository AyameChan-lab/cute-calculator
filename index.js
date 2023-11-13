const key = document.querySelectorAll('[key]');
const screen = document.querySelector('#screen');
const emojiKun = document.querySelector('#emoji-kun');
let process = '';
let display = '';
let blockOperater = true;
const randomEmoji = ()=>{
    const emojiList = [
    '(≧∇≦)ﾉ',
    '（￣︶￣）↗',
    'ヾ(≧ ▽ ≦)ゝ',
    'ο(=•ω＜=)ρ⌒☆',
    '*★,°*:.☆(￣▽￣)/$:*.°★* 。',
    '(～￣▽￣)～',
    '(✿◡‿◡)',
    '＞﹏＜',
    '(oﾟvﾟ)ノ',
    'o(〃＾▽＾〃)o'
    ]
    return emojiList[Math.floor(Math.random() * emojiList.length)];
}   
key.forEach((e)=>{
    e.addEventListener('click',()=>{
        const keyName = e.attributes.key.value;
        if(keyName == 'q'){
            let answer = eval(process).toString();
            process = answer;
            display = answer;
        }else if(keyName == 'reset'){
            process = '';
            display = '';
        }else if(keyName == 'del'){
            process = process.slice(0,-1);
            display = display.slice(0,-1);
            let check = process.slice(-1);
            {check == '' || check == '+' || check == '-' || check== '*' || check == '/' && check == '.' 
             ? blockOperater=true
             : blockOperater=false }
        }else if(keyName == '+' && !blockOperater && process.length !== 16){
            process = process.concat(keyName);
            display = display.concat(keyName);
            blockOperater = true;
        }else if(keyName == '-' && !blockOperater && process.length !== 16){
            process = process.concat(keyName);
            display = display.concat(keyName);
            blockOperater = true;
        }else if(keyName == '*' && !blockOperater && process.length !== 16){
            process = process.concat('*');
            display = display.concat('x');
            blockOperater = true;
        }else if(keyName == '/' && !blockOperater && process.length !== 16){
            process = process.concat(keyName);
            display = display.concat('÷');
            blockOperater = true;
        }else if(keyName == '.' && !blockOperater && process.length !== 16){
            process = process.concat(keyName);
            display = display.concat(keyName);
            blockOperater = true;
        }else if(keyName !== '+' && keyName !== '-' && keyName !== '*' && keyName !== '/' && keyName !== '.' && process.length !== 16){
            process = process.concat(keyName);
            display = display.concat(keyName);
            blockOperater = false;
        }
        // Random Emoji Cuteeeeeee
        emojiKun.innerText = randomEmoji();
        // Font Size Responsive
        {display.length >= 10 ? screen.classList.add('fs-1'):screen.classList.remove('fs-1')};
        // Display to Screen
        screen.value = display;
    })
})