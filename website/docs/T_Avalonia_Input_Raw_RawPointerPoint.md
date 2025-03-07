# RawPointerPoint Structure




## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct RawPointerPoint : IEquatable<RawPointerPoint>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure RawPointerPoint
	Implements IEquatable(Of RawPointerPoint)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type RawPointerPoint = 
    struct
        inherit ValueType
        interface IEquatable<RawPointerPoint>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawPointerEventArgs.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  RawPointerPoint</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(RawPointerPoint)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_Raw_RawPointerPoint__ctor">RawPointerPoint()</a></td>
<td>Initializes a new instance of the RawPointerPoint class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerPoint_Position">Position</a></td>
<td>Pointer position, in client DIPs.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerPoint_Pressure">Pressure</a></td>
<td>Gets a value that indicates the force that the pointer device (typically a pen/stylus) exerts on the surface of the digitizer.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerPoint_Twist">Twist</a></td>
<td>Gets the clockwise rotation in degrees of a pen device around its own major axis (such as when the user spins the pen in their fingers).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerPoint_XTilt">XTilt</a></td>
<td>Gets the plane angle between the Y-Z plane and the plane that contains the Y axis and the axis of the input device (typically a pen/stylus).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Raw_RawPointerPoint_YTilt">YTilt</a></td>
<td>Gets the plane angle between the X-Z plane and the plane that contains the X axis and the axis of the input device (typically a pen/stylus).</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
