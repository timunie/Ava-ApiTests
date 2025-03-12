# BringIntoView Method


Attempts to bring a portion of the target visual into view by scrolling the content.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool BringIntoView(
	Control target,
	Rect targetRect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function BringIntoView ( 
	target As Control,
	targetRect As Rect
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract BringIntoView : 
        target : Control * 
        targetRect : Rect -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/ILogicalScrollable.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The target visual.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The portion of the target visual to bring into view.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the scroll offset was changed; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ILogicalScrollable">ILogicalScrollable Interface</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

