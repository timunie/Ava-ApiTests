# PointerPointProperties Structure


Provides extended properties for a PointerPoint object.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct PointerPointProperties : IEquatable<PointerPointProperties>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure PointerPointProperties
	Implements IEquatable(Of PointerPointProperties)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type PointerPointProperties = 
    struct
        inherit ValueType
        interface IEquatable<PointerPointProperties>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerPoint.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  PointerPointProperties</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(PointerPointProperties)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_PointerPointProperties__ctor">PointerPointProperties()</a></td>
<td>Initializes a new instance of the PointerPointProperties class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_PointerPointProperties__ctor_2">PointerPointProperties(RawInputModifiers, PointerUpdateKind)</a></td>
<td>Initializes a new instance of the PointerPointProperties class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_PointerPointProperties__ctor_1">PointerPointProperties(RawInputModifiers, PointerUpdateKind, Single, Single, Single, Single)</a></td>
<td>Initializes a new instance of the PointerPointProperties class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_IsBarrelButtonPressed">IsBarrelButtonPressed</a></td>
<td>Gets a value that indicates whether the barrel button of the pen/stylus device is pressed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_IsEraser">IsEraser</a></td>
<td>Gets a value that indicates whether the input is from a pen eraser.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_IsInverted">IsInverted</a></td>
<td>Gets a value that indicates whether the digitizer pen is inverted.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_IsLeftButtonPressed">IsLeftButtonPressed</a></td>
<td>Gets a value that indicates whether the pointer input was triggered by the primary action mode of an input device.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_IsMiddleButtonPressed">IsMiddleButtonPressed</a></td>
<td>Gets a value that indicates whether the pointer input was triggered by the tertiary action mode of an input device.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_IsRightButtonPressed">IsRightButtonPressed</a></td>
<td>Gets a value that indicates whether the pointer input was triggered by the secondary action mode (if supported) of an input device.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_IsXButton1Pressed">IsXButton1Pressed</a></td>
<td>Gets a value that indicates whether the pointer input was triggered by the first extended mouse button (XButton1).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_IsXButton2Pressed">IsXButton2Pressed</a></td>
<td>Gets a value that indicates whether the pointer input was triggered by the second extended mouse button (XButton2).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_None">None</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_PointerUpdateKind">PointerUpdateKind</a></td>
<td>Gets the kind of pointer state change.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_Pressure">Pressure</a></td>
<td>Gets a value that indicates the force that the pointer device (typically a pen/stylus) exerts on the surface of the digitizer.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_Twist">Twist</a></td>
<td>Gets the clockwise rotation in degrees of a pen device around its own major axis (such as when the user spins the pen in their fingers).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_XTilt">XTilt</a></td>
<td>Gets the plane angle between the Y-Z plane and the plane that contains the Y axis and the axis of the input device (typically a pen/stylus).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_PointerPointProperties_YTilt">YTilt</a></td>
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
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

