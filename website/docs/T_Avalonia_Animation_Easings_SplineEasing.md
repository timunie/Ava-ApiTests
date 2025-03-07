# SplineEasing Class


Eases a <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a> value using a user-defined cubic bezier curve. Good for custom easing functions that doesn't quite fit with the built-in ones.



## Definition
**Namespace:** <a href="N_Avalonia_Animation_Easings">Avalonia.Animation.Easings</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class SplineEasing : Easing
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class SplineEasing
	Inherits Easing
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type SplineEasing = 
    class
        inherit Easing
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Easings/SplineEasing.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Animation_Easings_Easing">Easing</a>  →  SplineEasing</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Animation_Easings_SplineEasing__ctor">SplineEasing()</a></td>
<td>Initializes a new instance of the SplineEasing class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_Easings_SplineEasing__ctor_1">SplineEasing(KeySpline)</a></td>
<td>Initializes a new instance of the SplineEasing class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Animation_Easings_SplineEasing__ctor_2">SplineEasing(Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the SplineEasing class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Animation_Easings_SplineEasing_X1">X1</a></td>
<td>X coordinate of the first control point</td>
</tr>
<tr>
<td><a href="P_Avalonia_Animation_Easings_SplineEasing_X2">X2</a></td>
<td>X coordinate of the second control point</td>
</tr>
<tr>
<td><a href="P_Avalonia_Animation_Easings_SplineEasing_Y1">Y1</a></td>
<td>Y coordinate of the first control point</td>
</tr>
<tr>
<td><a href="P_Avalonia_Animation_Easings_SplineEasing_Y2">Y2</a></td>
<td>Y coordinate of the second control point</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Animation_Easings_SplineEasing_Ease">Ease(Double)</a></td>
<td>Returns the value of the transition for the specified progress.<br />(Overrides <a href="M_Avalonia_Animation_Easings_Easing_Ease">Easing.Ease(Double)</a>)</td>
</tr>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Animation_Easings">Avalonia.Animation.Easings Namespace</a>  
