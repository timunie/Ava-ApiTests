---
title:CallbackBase Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CallbackBase Class




## Definition
**Namespace:** <a href="N_Avalonia_MicroCom">Avalonia.MicroCom</a>  
**Assembly:** Avalonia.MicroCom (in Avalonia.MicroCom.dll) Version: 11.2.4

**C#**
``` C#
public abstract class CallbackBase : IUnknown, 
	IDisposable, IMicroComShadowContainer
```
**VB**
``` VB
Public MustInherit Class CallbackBase
	Implements IUnknown, IDisposable, IMicroComShadowContainer
```
**F#**
``` F#
[<AbstractClassAttribute>]
type CallbackBase = 
    class
        interface IUnknown
        interface IDisposable
        interface IMicroComShadowContainer
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  CallbackBase</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_MicroCom_Runtime_IMicroComShadowContainer">IMicroComShadowContainer</a>, <a href="T_MicroCom_Runtime_IUnknown">IUnknown</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_MicroCom_CallbackBase__ctor">CallbackBase()</a></td>
<td>Initializes a new instance of the CallbackBase class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_MicroCom_CallbackBase_IsDestroyed">IsDestroyed</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_MicroCom_CallbackBase_Shadow">Shadow</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_MicroCom_CallbackBase_Destroyed">Destroyed()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_MicroCom_CallbackBase_Dispose">Dispose()</a></td>
<td>Releases all resources used by the CallbackBase</td></tr>
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
<td><a href="M_Avalonia_MicroCom_CallbackBase_OnReferencedFromNative">OnReferencedFromNative()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_MicroCom_CallbackBase_OnUnreferencedFromNative">OnUnreferencedFromNative()</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComRuntime_QueryInterface__1">QueryInterface(T)()</a></td>
<td><br />(Defined by <a href="T_MicroCom_Runtime_MicroComRuntime">MicroComRuntime</a>)</td></tr>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComRuntime_UnsafeAddRef">UnsafeAddRef()</a></td>
<td><br />(Defined by <a href="T_MicroCom_Runtime_MicroComRuntime">MicroComRuntime</a>)</td></tr>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComRuntime_UnsafeRelease">UnsafeRelease()</a></td>
<td><br />(Defined by <a href="T_MicroCom_Runtime_MicroComRuntime">MicroComRuntime</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_MicroCom">Avalonia.MicroCom Namespace</a>  
