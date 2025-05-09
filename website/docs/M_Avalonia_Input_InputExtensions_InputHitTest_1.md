# InputHitTest(IInputElement, Point, Func&lt;Visual, Boolean&gt;, Boolean) Method


Returns the topmost active input element at a point on an <a href="T_Avalonia_Input_IInputElement">IInputElement</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IInputElement? InputHitTest(
	this IInputElement element,
	Point p,
	Func<Visual, bool> filter,
	bool enabledElementsOnly = true
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function InputHitTest ( 
	element As IInputElement,
	p As Point,
	filter As Func(Of Visual, Boolean),
	Optional enabledElementsOnly As Boolean = true
) As IInputElement
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member InputHitTest : 
        element : IInputElement * 
        p : Point * 
        filter : Func<Visual, bool> * 
        ?enabledElementsOnly : bool 
(* Defaults:
        let _enabledElementsOnly = defaultArg enabledElementsOnly true
*)
-> IInputElement 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/InputExtensions.cs#L72" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd>The element to test.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point on <em>element</em>.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Visual">Visual</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd>A filter predicate. If the predicate returns false then the visual and all its children will be excluded from the results.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether to only return elements for which <a href="P_Avalonia_Input_IInputElement_IsEffectivelyEnabled">IsEffectivelyEnabled</a> is true.</dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IInputElement">IInputElement</a>  
The topmost <a href="T_Avalonia_Input_IInputElement">IInputElement</a> at the specified position.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_IInputElement">IInputElement</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_InputExtensions">InputExtensions Class</a>  
<a href="Overload_Avalonia_Input_InputExtensions_InputHitTest">InputHitTest Overload</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

