var sectionDashboard = document.querySelector('#dashboard')
var sectionProdutos = document.querySelector('#produtos')
var sectionCliente = document.querySelector('#cliente')
var sectionFornecedor = document.querySelector('#fornecedor')
var sectionVendas = document.querySelector('#vendas')
var sectionCompras = document.querySelector('#compras')
var sectionEstoque = document.querySelector('#estoque')
var sectionFinanceiro = document.querySelector('#financeiro')
var sectionProducao = document.querySelector('#producao')

var dashboard = document.querySelector('.dashboard')
var produtos = document.querySelector('.produtos')
var cliente = document.querySelector('.cliente')
var fornecedor = document.querySelector('.fornecedor')
var vendas = document.querySelector('.vendas')
var compras = document.querySelector('.compras')
var estoque = document.querySelector('.estoque')
var financeiro = document.querySelector('.financeiro')
var producao = document.querySelector('.producao')

cliente.addEventListener('click', ()=>{
    
    cliente.style.color = 'yellow'
    compras.style.color = 'white'
    dashboard.style.color = 'white'
    estoque.style.color = 'white'
    financeiro.style.color = 'white'
    fornecedor.style.color = 'white'
    producao.style.color = 'white'
    produtos.style.color = 'white'
    vendas.style.color = 'white'    

    sectionCliente.style.display = 'block'
    sectionCompras.style.display = 'none'
    sectionDashboard.style.display = 'none'
    sectionEstoque.style.display = 'none'
    sectionFinanceiro.style.display = 'none'
    sectionFornecedor.style.display = 'none'
    sectionProducao.style.display = 'none'
    sectionProdutos.style.display = 'none'
    sectionVendas.style.display = 'none'
})

compras.addEventListener('click', ()=>{
    
    cliente.style.color = 'white'
    compras.style.color = 'yellow'
    dashboard.style.color = 'white'
    estoque.style.color = 'white'
    financeiro.style.color = 'white'
    fornecedor.style.color = 'white'
    producao.style.color = 'white'
    produtos.style.color = 'white'
    vendas.style.color = 'white'    

    sectionCliente.style.display = 'none'
    sectionCompras.style.display = 'block'
    sectionDashboard.style.display = 'none'
    sectionEstoque.style.display = 'none'
    sectionFinanceiro.style.display = 'none'
    sectionFornecedor.style.display = 'none'
    sectionProducao.style.display = 'none'
    sectionProdutos.style.display = 'none'
    sectionVendas.style.display = 'none'
})



dashboard.addEventListener('click', ()=>{
    
    cliente.style.color = 'white'
    compras.style.color = 'white'
    dashboard.style.color = 'yellow'
    estoque.style.color = 'white'
    financeiro.style.color = 'white'
    fornecedor.style.color = 'white'
    producao.style.color = 'white'
    produtos.style.color = 'white'
    vendas.style.color = 'white'    

    sectionCliente.style.display = 'none'
    sectionCompras.style.display = 'none'
    sectionDashboard.style.display = 'block'
    sectionEstoque.style.display = 'none'
    sectionFinanceiro.style.display = 'none'
    sectionFornecedor.style.display = 'none'
    sectionProducao.style.display = 'none'
    sectionProdutos.style.display = 'none'
    sectionVendas.style.display = 'none'
})

estoque.addEventListener('click', ()=>{
    
    cliente.style.color = 'white'
    compras.style.color = 'white'
    dashboard.style.color = 'white'
    estoque.style.color = 'yellow'
    financeiro.style.color = 'white'
    fornecedor.style.color = 'white'
    producao.style.color = 'white'
    produtos.style.color = 'white'
    vendas.style.color = 'white'    

    sectionCliente.style.display = 'none'
    sectionCompras.style.display = 'none'
    sectionDashboard.style.display = 'none'
    sectionEstoque.style.display = 'block'
    sectionFinanceiro.style.display = 'none'
    sectionFornecedor.style.display = 'none'
    sectionProducao.style.display = 'none'
    sectionProdutos.style.display = 'none'
    sectionVendas.style.display = 'none'
})

financeiro.addEventListener('click', ()=>{
    
    cliente.style.color = 'white'
    compras.style.color = 'white'
    dashboard.style.color = 'white'
    estoque.style.color = 'white'
    financeiro.style.color = 'yellow'
    fornecedor.style.color = 'white'
    producao.style.color = 'white'
    produtos.style.color = 'white'
    vendas.style.color = 'white'    

    sectionCliente.style.display = 'none'
    sectionCompras.style.display = 'none'
    sectionDashboard.style.display = 'none'
    sectionEstoque.style.display = 'none'
    sectionFinanceiro.style.display = 'block'
    sectionFornecedor.style.display = 'none'
    sectionProducao.style.display = 'none'
    sectionProdutos.style.display = 'none'
    sectionVendas.style.display = 'none'
})

fornecedor.addEventListener('click', ()=>{
    
    cliente.style.color = 'white'
    compras.style.color = 'white'
    dashboard.style.color = 'white'
    estoque.style.color = 'white'
    financeiro.style.color = 'white'
    fornecedor.style.color = 'yellow'
    producao.style.color = 'white'
    produtos.style.color = 'white'
    vendas.style.color = 'white'    

    sectionCliente.style.display = 'none'
    sectionCompras.style.display = 'none'
    sectionDashboard.style.display = 'none'
    sectionEstoque.style.display = 'none'
    sectionFinanceiro.style.display = 'none'
    sectionFornecedor.style.display = 'block'
    sectionProducao.style.display = 'none'
    sectionProdutos.style.display = 'none'
    sectionVendas.style.display = 'none'
})

producao.addEventListener('click', ()=>{
    
    cliente.style.color = 'white'
    compras.style.color = 'white'
    dashboard.style.color = 'white'
    estoque.style.color = 'white'
    financeiro.style.color = 'white'
    fornecedor.style.color = 'white'
    producao.style.color = 'yellow'
    produtos.style.color = 'white'
    vendas.style.color = 'white'    

    sectionCliente.style.display = 'none'
    sectionCompras.style.display = 'none'
    sectionDashboard.style.display = 'none'
    sectionEstoque.style.display = 'none'
    sectionFinanceiro.style.display = 'none'
    sectionFornecedor.style.display = 'none'
    sectionProducao.style.display = 'block'
    sectionProdutos.style.display = 'none'
    sectionVendas.style.display = 'none'
})

produtos.addEventListener('click', ()=>{
    
    cliente.style.color = 'white'
    compras.style.color = 'white'
    dashboard.style.color = 'white'
    estoque.style.color = 'white'
    financeiro.style.color = 'white'
    fornecedor.style.color = 'white'
    producao.style.color = 'white'
    produtos.style.color = 'yellow'
    vendas.style.color = 'white'    

    sectionCliente.style.display = 'none'
    sectionCompras.style.display = 'none'
    sectionDashboard.style.display = 'none'
    sectionEstoque.style.display = 'none'
    sectionFinanceiro.style.display = 'none'
    sectionFornecedor.style.display = 'none'
    sectionProducao.style.display = 'none'
    sectionProdutos.style.display = 'block'
    sectionVendas.style.display = 'none'
})

vendas.addEventListener('click', ()=>{
    
    cliente.style.color = 'white'
    compras.style.color = 'white'
    dashboard.style.color = 'white'
    estoque.style.color = 'white'
    financeiro.style.color = 'white'
    fornecedor.style.color = 'white'
    producao.style.color = 'white'
    produtos.style.color = 'white'
    vendas.style.color = 'yellow'    

    sectionCliente.style.display = 'none'
    sectionCompras.style.display = 'none'
    sectionDashboard.style.display = 'none'
    sectionEstoque.style.display = 'none'
    sectionFinanceiro.style.display = 'none'
    sectionFornecedor.style.display = 'none'
    sectionProducao.style.display = 'none'
    sectionProdutos.style.display = 'none'
    sectionVendas.style.display = 'block'
})

//-----------FIM DA NAVEGAÇÃO DE MENU------------------------
var dashboardBtn1Back = document.querySelector('.dashboard-1')
const dashboardBtn1 = document.querySelector('#dashboard-1')

dashboardBtn1Back.style.background = 'white'
dashboardBtn1.src = 'img/user.png'