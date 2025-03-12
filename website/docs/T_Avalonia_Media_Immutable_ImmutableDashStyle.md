# ImmutableDashStyle Class


Represents the sequence of dashes and gaps that will be applied by an <a href="T_Avalonia_Media_Immutable_ImmutablePen">ImmutablePen</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ImmutableDashStyle : IDashStyle, 
	IEquatable<IDashStyle>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ImmutableDashStyle
	Implements IDashStyle, IEquatable(Of IDashStyle)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ImmutableDashStyle = 
    class
        interface IDashStyle
        interface IEquatable<IDashStyle>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutableDashStyle.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ImmutableDashStyle</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IDashStyle">IDashStyle</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(<a href="T_Avalonia_Media_IDashStyle">IDashStyle</a>)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableDashStyle__ctor">ImmutableDashStyle(IEnumerable(Double), Double)</a></td>
<td>Initializes a new instance of the ImmutableDashStyle class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableDashStyle_Dashes">Dashes</a></td>
<td>Gets or sets the length of alternating dashes and gaps.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableDashStyle_Offset">Offset</a></td>
<td>Gets or sets how far in the dash sequence the stroke will start.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableDashStyle_Equals">Equals(IDashStyle)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableDashStyle_Equals_1">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableDashStyle_GetHashCode">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_BrushExtensions_ToImmutable_1">ToImmutable()</a></td>
<td>Converts a dash style to an immutable dash style.<br />(Defined by <a href="T_Avalonia_Media_BrushExtensions">BrushExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  

