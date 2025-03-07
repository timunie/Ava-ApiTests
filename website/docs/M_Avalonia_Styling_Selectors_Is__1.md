# Is&lt;T&gt;(Selector) Method


Returns a selector which matches a type or a derived type.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Selector Is<T>(
	this Selector? previous
)
where T : StyledElement

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function Is(Of T As StyledElement) ( 
	previous As Selector
) As Selector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member Is : 
        previous : Selector -> Selector  when 'T : StyledElement
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Selectors.cs#L80" title="View the source code">View Source</a>



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
<a href="Overload_Avalonia_Styling_Selectors_Is">Is Overload</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
