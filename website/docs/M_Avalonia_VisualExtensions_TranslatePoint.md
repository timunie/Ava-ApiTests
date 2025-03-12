# TranslatePoint Method


Translates a point relative to this visual to coordinates that are relative to the specified visual.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Point? TranslatePoint(
	this Visual visual,
	Point point,
	Visual relativeTo
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function TranslatePoint ( 
	visual As Visual,
	point As Point,
	relativeTo As Visual
) As Point?
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member TranslatePoint : 
        visual : Visual * 
        point : Point * 
        relativeTo : Visual -> Nullable<Point> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/VisualExtensions.cs#L81" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The visual.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point value, as relative to this visual.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The visual to translate the given point into.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Point">Point</a>)  
A point value, now relative to the target visual rather than this source element, or null if the two elements have no common ancestor.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Visual">Visual</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_VisualExtensions">VisualExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

