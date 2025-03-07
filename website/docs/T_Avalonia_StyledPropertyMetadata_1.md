# StyledPropertyMetadata&lt;TValue&gt; Class


Metadata for styled avalonia properties.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class StyledPropertyMetadata<TValue> : AvaloniaPropertyMetadata, 
	IStyledPropertyMetadata

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class StyledPropertyMetadata(Of TValue)
	Inherits AvaloniaPropertyMetadata
	Implements IStyledPropertyMetadata
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type StyledPropertyMetadata<'TValue> = 
    class
        inherit AvaloniaPropertyMetadata
        interface IStyledPropertyMetadata
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledPropertyMetadata%601.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>  →  StyledPropertyMetadata(TValue)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_IStyledPropertyMetadata">IStyledPropertyMetadata</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_StyledPropertyMetadata_1__ctor">StyledPropertyMetadata(TValue)(Optional(TValue), BindingMode, Func(AvaloniaObject, TValue, TValue), Boolean)</a></td>
<td>Initializes a new instance of the StyledPropertyMetadata(TValue) class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_StyledPropertyMetadata_1_CoerceValue">CoerceValue</a></td>
<td>Gets the value coercion callback, if any.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyMetadata_DefaultBindingMode">DefaultBindingMode</a></td>
<td>Gets the default binding mode for the property.<br />(Inherited from <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledPropertyMetadata_1_DefaultValue">DefaultValue</a></td>
<td>Gets the default value for the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyMetadata_EnableDataValidation">EnableDataValidation</a></td>
<td>Gets a value indicating whether the property is interested in data validation.<br />(Inherited from <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaPropertyMetadata_IsReadOnly">IsReadOnly</a></td>
<td>Gets whether this instance is read-only and can't be modified.<br />(Inherited from <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>)</td>
</tr>
</table>

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
<td><a href="M_Avalonia_AvaloniaPropertyMetadata_Freeze">Freeze()</a></td>
<td>Makes this instance read-only. No further modifications are allowed after this call.<br />(Inherited from <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledPropertyMetadata_1_GenerateTypeSafeMetadata">GenerateTypeSafeMetadata()</a></td>
<td>Gets a copy of this object configured for use with any owner type.<br />(Overrides <a href="M_Avalonia_AvaloniaPropertyMetadata_GenerateTypeSafeMetadata">AvaloniaPropertyMetadata.GenerateTypeSafeMetadata()</a>)</td>
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
<td><a href="M_Avalonia_StyledPropertyMetadata_1_Merge">Merge(AvaloniaPropertyMetadata, AvaloniaProperty)</a></td>
<td>Merges the metadata with the base metadata.<br />(Overrides <a href="M_Avalonia_AvaloniaPropertyMetadata_Merge">AvaloniaPropertyMetadata.Merge(AvaloniaPropertyMetadata, AvaloniaProperty)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
