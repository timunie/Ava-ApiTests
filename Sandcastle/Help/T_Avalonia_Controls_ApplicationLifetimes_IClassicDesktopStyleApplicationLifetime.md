---
title:IClassicDesktopStyleApplicationLifetime Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IClassicDesktopStyleApplicationLifetime Interface




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface IClassicDesktopStyleApplicationLifetime : IControlledApplicationLifetime, 
	IApplicationLifetime
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface IClassicDesktopStyleApplicationLifetime
	Inherits IControlledApplicationLifetime, IApplicationLifetime
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type IClassicDesktopStyleApplicationLifetime = 
    interface
        interface IControlledApplicationLifetime
        interface IApplicationLifetime
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime">IApplicationLifetime</a>, <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_Args">Args</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_MainWindow">MainWindow</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownMode">ShutdownMode</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_Windows">Windows</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Shutdown">Shutdown(Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_TryShutdown">TryShutdown(Int32)</a></td>
<td> </td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Exit">Exit</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a>)</td></tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownRequested">ShutdownRequested</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Startup">Startup</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
