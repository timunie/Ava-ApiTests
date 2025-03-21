# OfType&lt;T&gt;(Selector) Method


Returns a selector which matches a type.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Selector OfType<T>(
	this Selector? previous
)
where T : StyledElement

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function OfType(Of T As StyledElement) ( 
	previous As Selector
) As Selector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member OfType : 
        previous : Selector -> Selector  when 'T : StyledElement
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Selectors.cs#L176" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Styling_Selector">Selector</a></dt><dd>The previous selector.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type.</dd></dl>

#### Return Value
<a href="T_Avalonia_Styling_Selector">Selector</a>  
The selector.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Styling_Selector">Selector</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Styling_Selectors">Selectors Class</a>  
<a href="Overload_Avalonia_Styling_Selectors_OfType">OfType Overload</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

