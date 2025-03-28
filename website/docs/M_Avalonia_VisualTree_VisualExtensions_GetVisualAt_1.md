# GetVisualAt(Visual, Point) Method


Gets the first visual in the visual tree whose bounds contain a point.



## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Visual? GetVisualAt(
	this Visual visual,
	Point p
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetVisualAt ( 
	visual As Visual,
	p As Point
) As Visual
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetVisualAt : 
        visual : Visual * 
        p : Point -> Visual 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/VisualTree/VisualExtensions.cs#L286" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The root visual to test.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point.</dd></dl>

#### Return Value
<a href="T_Avalonia_Visual">Visual</a>  
The visual at the requested point.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Visual">Visual</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions Class</a>  
<a href="Overload_Avalonia_VisualTree_VisualExtensions_GetVisualAt">GetVisualAt Overload</a>  
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  

