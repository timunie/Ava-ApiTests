# LtrbRect Structure


This struct is essentially the same thing as MilRectD Unlike our "normal" Rect which is more human-readable and human-usable this struct is optimized for actual processing that doesn't really care about Width and Height but pretty much always only cares about Right and Bottom edge coordinates Not having to constantly convert between Width/Height and Right/Bottom for no actual reason saves us some perf This structure is intended to be mostly internal, but it's exposed as a PrivateApi type so it can be passed to the drawing backend when needed



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct LtrbRect
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure LtrbRect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type LtrbRect = 
    struct
        inherit ValueType
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/LtrbRect.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  LtrbRect</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_LtrbRect_Equals">Equals(LtrbRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_LtrbRect_Equals_1">Equals(LtrbRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_LtrbRect_Equals_2">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_LtrbRect_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Platform_LtrbRect_op_Equality">Equality(LtrbRect, LtrbRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_LtrbRect_op_Inequality">Inequality(LtrbRect, LtrbRect)</a></td>
<td> </td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Platform_LtrbRect_Bottom">Bottom</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_LtrbRect_Left">Left</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_LtrbRect_Right">Right</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_LtrbRect_Top">Top</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
