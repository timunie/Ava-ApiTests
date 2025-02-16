---
title:IActivatableApplicationLifetime Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IActivatableApplicationLifetime Interface
<blockquote><strong>Note: This API is now obsolete.</strong></blockquote>




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
[ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)]
public interface IActivatableApplicationLifetime : IActivatableLifetime
```
**VB**
``` VB
<NotClientImplementableAttribute>
<ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)>
Public Interface IActivatableApplicationLifetime
	Inherits IActivatableLifetime
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
[<ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)>]
type IActivatableApplicationLifetime = 
    interface
        interface IActivatableLifetime
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_TryEnterBackground">TryEnterBackground()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_TryLeaveBackground">TryLeaveBackground()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_Activated">Activated</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_Deactivated">Deactivated</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
