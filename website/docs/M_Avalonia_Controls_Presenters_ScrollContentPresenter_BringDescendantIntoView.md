# BringDescendantIntoView Method


Attempts to bring a portion of the target visual into view by scrolling the content.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool BringDescendantIntoView(
	Visual target,
	Rect targetRect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function BringDescendantIntoView ( 
	target As Visual,
	targetRect As Rect
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BringDescendantIntoView : 
        target : Visual * 
        targetRect : Rect -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Presenters/ScrollContentPresenter.cs#L240" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The target visual.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The portion of the target visual to bring into view.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the scroll offset was changed; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Presenters_ScrollContentPresenter">ScrollContentPresenter Class</a>  
<a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters Namespace</a>  

