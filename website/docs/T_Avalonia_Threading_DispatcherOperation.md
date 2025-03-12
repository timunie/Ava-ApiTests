# DispatcherOperation Class




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class DispatcherOperation
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class DispatcherOperation
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DispatcherOperation = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherOperation.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DispatcherOperation</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Threading_DispatcherOperation_1">Avalonia.Threading.DispatcherOperation(T)</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherOperation_Dispatcher">Dispatcher</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherOperation_Priority">Priority</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherOperation_Status">Status</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherOperation_Abort">Abort()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherOperation_AbortTask">AbortTask()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherOperation_GetTask">GetTask()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherOperation_GetTaskCore">GetTaskCore()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherOperation_InvokeCore">InvokeCore()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherOperation_Wait">Wait()</a></td>
<td>Waits for this operation to complete.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherOperation_Wait_1">Wait(TimeSpan)</a></td>
<td>Waits for this operation to complete.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Threading_DispatcherOperation_Aborted">Aborted</a></td>
<td>An event that is raised when the operation is aborted or canceled.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Threading_DispatcherOperation_Completed">Completed</a></td>
<td>An event that is raised when the operation completes.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherOperation_Callback">Callback</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherOperation_TaskSource">TaskSource</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherOperation_ThrowOnUiThread">ThrowOnUiThread</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

