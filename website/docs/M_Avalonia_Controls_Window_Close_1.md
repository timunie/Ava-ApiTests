# Close(Object) Method


Closes a dialog window with the specified result.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Close(
	Object? dialogResult
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Close ( 
	dialogResult As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Close : 
        dialogResult : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Window.cs#L473" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The dialog result.</dd></dl>

## Remarks
When the window is shown with the <a href="M_Avalonia_Controls_Window_ShowDialog__1">ShowDialog(TResult)(Window)</a> or <a href="M_Avalonia_Controls_Window_ShowDialog__1">ShowDialog(TResult)(Window)</a> method, the resulting task will produce the _dialogResult value when the window is closed.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Window">Window Class</a>  
<a href="Overload_Avalonia_Controls_Window_Close">Close Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

