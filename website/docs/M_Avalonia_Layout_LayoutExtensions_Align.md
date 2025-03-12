# Align Method


Aligns a rect in a constraining rect according to horizontal and vertical alignment settings.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Rect Align(
	this Rect rect,
	Rect constraint,
	HorizontalAlignment horizontalAlignment,
	VerticalAlignment verticalAlignment
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function Align ( 
	rect As Rect,
	constraint As Rect,
	horizontalAlignment As HorizontalAlignment,
	verticalAlignment As VerticalAlignment
) As Rect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member Align : 
        rect : Rect * 
        constraint : Rect * 
        horizontalAlignment : HorizontalAlignment * 
        verticalAlignment : VerticalAlignment -> Rect 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutExtensions.cs#L28" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rect to align.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The constraining rect.</dd><dt>  <a href="T_Avalonia_Layout_HorizontalAlignment">HorizontalAlignment</a></dt><dd>The horizontal alignment.</dd><dt>  <a href="T_Avalonia_Layout_VerticalAlignment">VerticalAlignment</a></dt><dd>The vertical alignment.</dd></dl>

#### Return Value
<a href="T_Avalonia_Rect">Rect</a>  


#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Rect">Rect</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutExtensions">LayoutExtensions Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

