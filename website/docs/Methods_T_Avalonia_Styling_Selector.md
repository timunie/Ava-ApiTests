# Selector Methods




## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selector_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selector_ToString_1">ToString(Style)</a></td>
<td>Gets a string representing the selector, with the nesting separator (`^`) replaced with the parent selector.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Child">Child()</a></td>
<td>Returns a selector which matches a previous selector's child.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Class">Class(String)</a></td>
<td>Returns a selector which matches a control's style class.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Descendant">Descendant()</a></td>
<td>Returns a selector which matches a descendant of a previous selector.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Is">Is(Type)</a></td>
<td>Returns a selector which matches a type or a derived type.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Is__1">Is(T)()</a></td>
<td>Returns a selector which matches a type or a derived type.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Name">Name(String)</a></td>
<td>Returns a selector which matches a control's Name.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Nesting">Nesting()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Not_1">Not(Func(Selector, Selector))</a></td>
<td>Returns a selector which inverts the results of selector argument.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Not">Not(Selector)</a></td>
<td>Returns a selector which inverts the results of selector argument.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_NthChild">NthChild(Int32, Int32)</a></td>
<td>The :nth-child() pseudo-class matches elements based on their position in a group of siblings.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_NthLastChild">NthLastChild(Int32, Int32)</a></td>
<td>The :nth-child() pseudo-class matches elements based on their position among a group of siblings, counting from the end.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_OfType">OfType(Type)</a></td>
<td>Returns a selector which matches a type.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_OfType__1">OfType(T)()</a></td>
<td>Returns a selector which matches a type.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_PropertyEquals">PropertyEquals(AvaloniaProperty, Object)</a></td>
<td>Returns a selector which matches a control with the specified property value.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_PropertyEquals__1">PropertyEquals(T)(AvaloniaProperty(T), Object)</a></td>
<td>Returns a selector which matches a control with the specified property value.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Selectors_Template">Template()</a></td>
<td>Returns a selector which enters a lookless control's template.<br />(Defined by <a href="T_Avalonia_Styling_Selectors">Selectors</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Styling_Selector">Selector Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

