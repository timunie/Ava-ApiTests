# Selectors Class


Extension methods for <a href="T_Avalonia_Styling_Selector">Selector</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class Selectors
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public NotInheritable Class Selectors
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
[<ExtensionAttribute>]
type Selectors = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Selectors.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Selectors</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Child">Child(Selector)</a></td>
<td>Returns a selector which matches a previous selector's child.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Class">Class(Selector, String)</a></td>
<td>Returns a selector which matches a control's style class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Descendant">Descendant(Selector)</a></td>
<td>Returns a selector which matches a descendant of a previous selector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Is">Is(Selector, Type)</a></td>
<td>Returns a selector which matches a type or a derived type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Is__1">Is(T)(Selector)</a></td>
<td>Returns a selector which matches a type or a derived type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Name">Name(Selector, String)</a></td>
<td>Returns a selector which matches a control's Name.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Nesting">Nesting(Selector)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Not">Not(Selector, Selector)</a></td>
<td>Returns a selector which inverts the results of selector argument.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Not_1">Not(Selector, Func(Selector, Selector))</a></td>
<td>Returns a selector which inverts the results of selector argument.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_NthChild">NthChild(Selector, Int32, Int32)</a></td>
<td>The :nth-child() pseudo-class matches elements based on their position in a group of siblings.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_NthLastChild">NthLastChild(Selector, Int32, Int32)</a></td>
<td>The :nth-child() pseudo-class matches elements based on their position among a group of siblings, counting from the end.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_OfType">OfType(Selector, Type)</a></td>
<td>Returns a selector which matches a type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_OfType__1">OfType(T)(Selector)</a></td>
<td>Returns a selector which matches a type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Or_1">Or(IReadOnlyList(Selector))</a></td>
<td>Returns a selector which ORs selectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Or">Or(Selector[])</a></td>
<td>Returns a selector which ORs selectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_PropertyEquals">PropertyEquals(Selector, AvaloniaProperty, Object)</a></td>
<td>Returns a selector which matches a control with the specified property value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_PropertyEquals__1">PropertyEquals(T)(Selector, AvaloniaProperty(T), Object)</a></td>
<td>Returns a selector which matches a control with the specified property value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Template">Template(Selector)</a></td>
<td>Returns a selector which enters a lookless control's template.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

