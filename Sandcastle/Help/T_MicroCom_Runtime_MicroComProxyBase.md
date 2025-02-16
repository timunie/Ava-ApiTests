---
title:MicroComProxyBase Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# MicroComProxyBase Class




## Definition
**Namespace:** <a href="N_MicroCom_Runtime">MicroCom.Runtime</a>  
**Assembly:** MicroCom.Runtime (in MicroCom.Runtime.dll) Version: 0.11.0

**C#**
``` C#
public class MicroComProxyBase : CriticalFinalizerObject, 
	IUnknown, IDisposable
```
**VB**
``` VB
Public Class MicroComProxyBase
	Inherits CriticalFinalizerObject
	Implements IUnknown, IDisposable
```
**F#**
``` F#
type MicroComProxyBase = 
    class
        inherit CriticalFinalizerObject
        interface IUnknown
        interface IDisposable
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.runtime.constrainedexecution.criticalfinalizerobject" target="_blank" rel="noopener noreferrer">CriticalFinalizerObject</a>  →  MicroComProxyBase</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_MicroCom_Runtime_IUnknown">IUnknown</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComProxyBase__ctor">MicroComProxyBase(IntPtr, Boolean)</a></td>
<td>Initializes a new instance of the MicroComProxyBase class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_MicroCom_Runtime_MicroComProxyBase_IsDisposed">IsDisposed</a></td>
<td> </td></tr>
<tr>
<td><a href="P_MicroCom_Runtime_MicroComProxyBase_NativePointer">NativePointer</a></td>
<td> </td></tr>
<tr>
<td><a href="P_MicroCom_Runtime_MicroComProxyBase_OwnsHandle">OwnsHandle</a></td>
<td> </td></tr>
<tr>
<td><a href="P_MicroCom_Runtime_MicroComProxyBase_PPV">PPV</a></td>
<td> </td></tr>
<tr>
<td><a href="P_MicroCom_Runtime_MicroComProxyBase_VTableSize">VTableSize</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComProxyBase_AddRef">AddRef()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComProxyBase_Dispose">Dispose()</a></td>
<td>Releases all resources used by the MicroComProxyBase</td></tr>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComProxyBase_Dispose_1">Dispose(Boolean)</a></td>
<td>Releases the unmanaged resources used by the MicroComProxyBase and optionally releases the managed resources</td></tr>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComProxyBase_EnsureOwned">EnsureOwned()</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComProxyBase_Finalize">Finalize()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.runtime.constrainedexecution.criticalfinalizerobject.finalize" target="_blank" rel="noopener noreferrer">CriticalFinalizerObject.Finalize()</a>)</td></tr>
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
<td><a href="M_MicroCom_Runtime_MicroComProxyBase_QueryInterface">QueryInterface(Guid, IntPtr)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComProxyBase_QueryInterface__1">QueryInterface(T)()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_MicroCom_Runtime_MicroComProxyBase_Release">Release()</a></td>
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
<a href="N_MicroCom_Runtime">MicroCom.Runtime Namespace</a>  
