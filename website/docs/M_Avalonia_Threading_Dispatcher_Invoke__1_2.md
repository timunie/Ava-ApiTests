# Invoke&lt;TResult&gt;(Func&lt;TResult&gt;, DispatcherPriority) Method


Executes the specified Func&lt;TResult&gt; synchronously on the thread that the Dispatcher was created on.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TResult Invoke<TResult>(
	Func<TResult> callback,
	DispatcherPriority priority
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Invoke(Of TResult) ( 
	callback As Func(Of TResult),
	priority As DispatcherPriority
) As TResult
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Invoke : 
        callback : Func<'TResult> * 
        priority : DispatcherPriority -> 'TResult 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L156" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(TResult)</dt><dd>A Func&lt;TResult&gt; delegate to invoke through the dispatcher.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd>The priority that determines in what order the specified callback is invoked relative to the other pending operations in the Dispatcher.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the <em>callback</em> return value.</dd></dl>

#### Return Value
TResult  
The return value from the delegate being invoked.

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_Invoke">Invoke Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

