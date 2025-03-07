# SynchronousCompletionAsyncResult&lt;T&gt; Structure


A task-like operation that is guaranteed to finish continuations synchronously, can be used for parametrized one-shot events



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct SynchronousCompletionAsyncResult<T> : INotifyCompletion, 
	IEquatable<SynchronousCompletionAsyncResult<T>>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure SynchronousCompletionAsyncResult(Of T)
	Implements INotifyCompletion, IEquatable(Of SynchronousCompletionAsyncResult(Of T))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type SynchronousCompletionAsyncResult<'T> = 
    struct
        inherit ValueType
        interface INotifyCompletion
        interface IEquatable<SynchronousCompletionAsyncResult<'T>>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/SynchronousCompletionAsyncResult.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  SynchronousCompletionAsyncResult(T)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(SynchronousCompletionAsyncResult(T)), <a href="https://learn.microsoft.com/dotnet/api/system.runtime.compilerservices.inotifycompletion" target="_blank" rel="noopener noreferrer">INotifyCompletion</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Utilities_SynchronousCompletionAsyncResult_1__ctor">SynchronousCompletionAsyncResult(T)(T)</a></td>
<td>Initializes a new instance of the SynchronousCompletionAsyncResult(T) class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Utilities_SynchronousCompletionAsyncResult_1_IsCompleted">IsCompleted</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Utilities_SynchronousCompletionAsyncResult_1_GetAwaiter">GetAwaiter()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_SynchronousCompletionAsyncResult_1_GetResult">GetResult()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Utilities_SynchronousCompletionAsyncResult_1_OnCompleted">OnCompleted(Action)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
