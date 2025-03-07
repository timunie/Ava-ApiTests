# ShowDialog&lt;TResult&gt;(Window) Method


Shows the window as a dialog.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task<TResult> ShowDialog<TResult>(
	Window owner
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ShowDialog(Of TResult) ( 
	owner As Window
) As Task(Of TResult)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ShowDialog : 
        owner : Window -> Task<'TResult> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Window.cs#L777" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Window">Window</a></dt><dd>The dialog's owner window.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the result produced by the dialog.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(TResult)  
. A task that can be used to retrieve the result of the dialog when it closes.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Window">Window Class</a>  
<a href="Overload_Avalonia_Controls_Window_ShowDialog">ShowDialog Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
