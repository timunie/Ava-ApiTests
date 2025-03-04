import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# BringDescendantIntoView Method


Attempts to bring a portion of the target visual into view by scrolling the content.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Presenters/ScrollContentPresenter.cs#L239" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  Visual</dt><dd>The target visual.</dd><dt>  Rect</dt><dd>The portion of the target visual to bring into view.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the scroll offset was changed; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Presenters_ScrollContentPresenter">ScrollContentPresenter Class</a>  
<a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters Namespace</a>  
