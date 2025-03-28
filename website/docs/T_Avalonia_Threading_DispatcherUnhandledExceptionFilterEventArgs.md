# DispatcherUnhandledExceptionFilterEventArgs Class


Represents the method that will handle the <a href="E_Avalonia_Threading_Dispatcher_UnhandledExceptionFilter">UnhandledExceptionFilter</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class DispatcherUnhandledExceptionFilterEventArgs : DispatcherEventArgs
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class DispatcherUnhandledExceptionFilterEventArgs
	Inherits DispatcherEventArgs
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type DispatcherUnhandledExceptionFilterEventArgs = 
    class
        inherit DispatcherEventArgs
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherUnhandledExceptionFilterEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.eventargs" target="_blank" rel="noopener noreferrer">EventArgs</a>  →  <a href="T_Avalonia_Threading_DispatcherEventArgs">DispatcherEventArgs</a>  →  DispatcherUnhandledExceptionFilterEventArgs</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherEventArgs_Dispatcher">Dispatcher</a></td>
<td>The Dispatcher associated with this event.<br />(Inherited from <a href="T_Avalonia_Threading_DispatcherEventArgs">DispatcherEventArgs</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherUnhandledExceptionFilterEventArgs_Exception">Exception</a></td>
<td>Gets the exception that was raised when executing code by way of the dispatcher.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherUnhandledExceptionFilterEventArgs_RequestCatch">RequestCatch</a></td>
<td>Gets or sets whether the exception should be caught and the event handlers called..</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

