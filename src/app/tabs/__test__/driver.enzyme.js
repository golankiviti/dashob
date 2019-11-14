import IconButton from '@material-ui/core/IconButton'

const getTab = (wrapper, index) => {
    const dataTest = `tabs-tab-${index}`

    const getName = () => wrapper.find(`[data-test='${dataTest}-name']`).text()
    const click = () => wrapper.find(`[data-test='${dataTest}']`).simulate('click')
    const close = () => wrapper.find(`[data-test='${dataTest}-close-button']`).find(IconButton).simulate('click')

    return {
        getName,
        click,
        close
    }
}

const addTab = wrapper => wrapper.find(`[data-test='tabs-add-button']`).find(IconButton).simulate('click')

export {
    getTab,
    addTab
}