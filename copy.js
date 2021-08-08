//--------------------------------------------------------
//Copy function using onclick + custom tooltip css
//--------------------------------------------------------

function copyTextByElement(text) {
    let input = document.createElement("textArea")
    document.body.appendChild(input)
    input.value = text
    input.select();
    input.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.body.removeChild(input)

}

function copyTextById(id, tooltipID) {
    let input = document.getElementById(id);
    input.select();
    input.setSelectionRange(0, 99999)
    document.execCommand("copy");
    var tooltip = document.getElementById(tooltipID);
    tooltip.innerHTML = 'Copiado!';
    console.info('Text:', input.value);
}

function outFunc(tooltipID) {
    var tooltip = document.getElementById(tooltipID);
    tooltip.innerHTML = "Copiar";
}

//--------------------------------------------------------
//Copy function using ClipboardJS + custom tooltip css
//--------------------------------------------------------

let clipboard2 = new ClipboardJS('.clipboard2')

function setTooltip1(btn, tooltip, info, infoAfter) {
    tooltip.innerHTML = info
    if (btn != null) {
        btn.addEventListener('mouseout', function () {
            tooltip.innerHTML = infoAfter
        }, { once: true })
    }
}

clipboard2.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    let btn = e.trigger
    let tooltip = e.trigger.getElementsByClassName('copy-infotext')[0]
    setTooltip1(btn, tooltip, 'Copiado!', 'Copiar');
    e.clearSelection();
})

clipboard2.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    e.clearSelection()
});

//--------------------------------------------------------
//Copy function using ClipboardJS + Bootstrap 4.0 tooltip
//--------------------------------------------------------

let clipboard = new ClipboardJS('.clipboard');

function setTooltip2(btn, tooltip) {
    $(tooltip).tooltip('hide').attr('data-original-title', 'Copiado!').tooltip('show')
    btn.addEventListener('mouseout', function () {
        $(tooltip).tooltip('hide').attr('data-original-title', 'Copiar')
    }, { once: true })
}

clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    let btn = e.trigger
    let tooltip = e.trigger.children[0]
    console.log(tooltip)
    setTooltip2(btn, tooltip)
    e.clearSelection
});

clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    e.clearSelection()
});

//--------------------------------------------------------
//Copy function using JS EventListener + Bootstrap 4.0 tooltip
//--------------------------------------------------------

let clipboard3 = document.querySelectorAll('.clipboard3')

clipboard3.forEach((copy) => {
    copy.addEventListener('click', () => {
        let input = document.querySelector(copy.getAttribute('data-clipboard-target'))
        input.select()
        document.execCommand("copy")
        let btn = copy
        let tooltip = copy.children[0]
        setTooltip2(btn, tooltip)
        console.info('Text:', input.value);
    })
})

//--------------------------------------------------------