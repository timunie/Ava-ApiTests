# Not(Selector, Selector) Method


Returns a selector which inverts the results of selector argument.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Selector Not(
	this Selector? previous,
	Selector argument
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function Not ( 
	previous As Selector,
	argument As Selector
) As Selector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member Not : 
        previous : Selector * 
        argument : Selector -> Selector 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Selectors.cs#L135" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Styling_Selector">Selector</a></dt><dd>The previous selector.</dd><dt>  <a href="T_Avalonia_Styling_Selector">Selector</a></dt><dd>The selector to be not-ed.</dd></dl>

#### Return Value
<a href="T_Avalonia_Styling_Selector">Selector</a>  
The selector.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Styling_Selector">Selector</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Styling_Selectors">Selectors Class</a>  
<a href="Overload_Avalonia_Styling_Selectors_Not">Not Overload</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
