---
title:ClassicDesktopStyleApplicationLifetime Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ClassicDesktopStyleApplicationLifetime Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public class ClassicDesktopStyleApplicationLifetime : IClassicDesktopStyleApplicationLifetime, 
	IControlledApplicationLifetime, IApplicationLifetime, IDisposable
```
**VB**
``` VB
Public Class ClassicDesktopStyleApplicationLifetime
	Implements IClassicDesktopStyleApplicationLifetime, IControlledApplicationLifetime, IApplicationLifetime, IDisposable
```
**F#**
``` F#
type ClassicDesktopStyleApplicationLifetime = 
    class
        interface IClassicDesktopStyleApplicationLifetime
        interface IControlledApplicationLifetime
        interface IApplicationLifetime
        interface IDisposable
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ClassicDesktopStyleApplicationLifetime</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime">IApplicationLifetime</a>, <a href="T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime">IClassicDesktopStyleApplicationLifetime</a>, <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime__ctor">ClassicDesktopStyleApplicationLifetime()</a></td>
<td>Initializes a new instance of the ClassicDesktopStyleApplicationLifetime class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Args">Args</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_MainWindow">MainWindow</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_ShutdownMode">ShutdownMode</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Windows">Windows</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Dispose">Dispose()</a></td>
<td>Releases all resources used by the ClassicDesktopStyleApplicationLifetime</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Shutdown">Shutdown(Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Start">Start()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Start_1">Start(String[])</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_TryShutdown">TryShutdown(Int32)</a></td>
<td> </td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Exit">Exit</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_ShutdownRequested">ShutdownRequested</a></td>
<td> </td></tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime_Startup">Startup</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
