---
title:CreatePopupHost Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreatePopupHost Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute("PopupHost is considered an internal API. Use Popup or any Popup-based controls (Flyout, Tooltip) instead.")]
public static IPopupHost CreatePopupHost(
	Visual target,
	IAvaloniaDependencyResolver? dependencyResolver
)
```
**VB**
``` VB
<UnstableAttribute("PopupHost is considered an internal API. Use Popup or any Popup-based controls (Flyout, Tooltip) instead.")>
Public Shared Function CreatePopupHost ( 
	target As Visual,
	dependencyResolver As IAvaloniaDependencyResolver
) As IPopupHost
```
**F#**
``` F#
[<UnstableAttribute("PopupHost is considered an internal API. Use Popup or any Popup-based controls (Flyout, Tooltip) instead.")>]
static member CreatePopupHost : 
        target : Visual * 
        dependencyResolver : IAvaloniaDependencyResolver -> IPopupHost 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_IAvaloniaDependencyResolver">IAvaloniaDependencyResolver</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_OverlayPopupHost">OverlayPopupHost Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
