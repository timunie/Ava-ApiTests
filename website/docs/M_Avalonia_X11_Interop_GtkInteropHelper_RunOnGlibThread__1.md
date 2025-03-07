# RunOnGlibThread&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_X11_Interop">Avalonia.X11.Interop</a>  
**Assembly:** Avalonia.X11 (in Avalonia.X11.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Task<T> RunOnGlibThread<T>(
	Func<T> cb
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function RunOnGlibThread(Of T) ( 
	cb As Func(Of T)
) As Task(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RunOnGlibThread : 
        cb : Func<'T> -> Task<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.X11/Interop/GtkInteropHelper.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(T)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(T)

## See Also


#### Reference
<a href="T_Avalonia_X11_Interop_GtkInteropHelper">GtkInteropHelper Class</a>  
<a href="N_Avalonia_X11_Interop">Avalonia.X11.Interop Namespace</a>  
