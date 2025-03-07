# GetInputElementsAt(IInputElement, Point) Method


Returns the active input elements at a point on an <a href="T_Avalonia_Input_IInputElement">IInputElement</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IEnumerable<IInputElement> GetInputElementsAt(
	this IInputElement element,
	Point p
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetInputElementsAt ( 
	element As IInputElement,
	p As Point
) As IEnumerable(Of IInputElement)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetInputElementsAt : 
        element : IInputElement * 
        p : Point -> IEnumerable<IInputElement> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/InputExtensions.cs#L36" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd>The element to test.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point on <em>element</em>.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Input_IInputElement">IInputElement</a>)  
The active input elements found at the point, ordered topmost first.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_IInputElement">IInputElement</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_InputExtensions">InputExtensions Class</a>  
<a href="Overload_Avalonia_Input_InputExtensions_GetInputElementsAt">GetInputElementsAt Overload</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
