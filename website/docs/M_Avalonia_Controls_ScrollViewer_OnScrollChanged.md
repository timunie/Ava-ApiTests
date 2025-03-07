# OnScrollChanged Method


Called when a change in scrolling state is detected, such as a change in scroll position, extent, or viewport size.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnScrollChanged(
	ScrollChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnScrollChanged ( 
	e As ScrollChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnScrollChanged : 
        e : ScrollChangedEventArgs -> unit 
override OnScrollChanged : 
        e : ScrollChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ScrollViewer.cs#L801" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_ScrollChangedEventArgs">ScrollChangedEventArgs</a></dt><dd>The event args.</dd></dl>If you override this method, call `base.OnScrollChanged(ScrollChangedEventArgs)` to ensure that this event is raised.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
