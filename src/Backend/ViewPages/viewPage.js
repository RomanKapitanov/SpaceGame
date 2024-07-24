export function ViewPage() {
    var main_section = document.getElementsByClassName("main_section")[0];
    var upgrade_section = document.getElementsByClassName("upgrade_section")[0];
    var resource_store_section = document.getElementsByClassName("resource_store_section")[0];
    var tasks_section = document.getElementsByClassName("tasks_section")[0];
    var wallet_section = document.getElementsByClassName("wallet_section")[0];

    main_section.style.display = "none";
    upgrade_section.style.display = "none";
    resource_store_section.style.display = "none";
    tasks_section.style.display = "none";
    wallet_section.style.display = "none";

    return [main_section, upgrade_section, resource_store_section, tasks_section, wallet_section];
}
