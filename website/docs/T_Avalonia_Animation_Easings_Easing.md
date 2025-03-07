# Easing Class


Base class for all Easing classes.



## Definition
**Namespace:** <a href="N_Avalonia_Animation_Easings">Avalonia.Animation.Easings</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[TypeConverterAttribute(typeof(EasingTypeConverter))]
public abstract class Easing : IEasing
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<TypeConverterAttribute(GetType(EasingTypeConverter))>
Public MustInherit Class Easing
	Implements IEasing
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<TypeConverterAttribute(typeof(EasingTypeConverter))>]
type Easing = 
    class
        interface IEasing
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Easings/Easing.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Easing</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Animation_Easings_BackEaseIn">Avalonia.Animation.Easings.BackEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_BackEaseInOut">Avalonia.Animation.Easings.BackEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_BackEaseOut">Avalonia.Animation.Easings.BackEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_BounceEaseIn">Avalonia.Animation.Easings.BounceEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_BounceEaseInOut">Avalonia.Animation.Easings.BounceEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_BounceEaseOut">Avalonia.Animation.Easings.BounceEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_CircularEaseIn">Avalonia.Animation.Easings.CircularEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_CircularEaseInOut">Avalonia.Animation.Easings.CircularEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_CircularEaseOut">Avalonia.Animation.Easings.CircularEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_CubicEaseIn">Avalonia.Animation.Easings.CubicEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_CubicEaseInOut">Avalonia.Animation.Easings.CubicEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_CubicEaseOut">Avalonia.Animation.Easings.CubicEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_ElasticEaseIn">Avalonia.Animation.Easings.ElasticEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_ElasticEaseInOut">Avalonia.Animation.Easings.ElasticEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_ElasticEaseOut">Avalonia.Animation.Easings.ElasticEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_ExponentialEaseIn">Avalonia.Animation.Easings.ExponentialEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_ExponentialEaseInOut">Avalonia.Animation.Easings.ExponentialEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_ExponentialEaseOut">Avalonia.Animation.Easings.ExponentialEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_LinearEasing">Avalonia.Animation.Easings.LinearEasing</a><br /><a href="T_Avalonia_Animation_Easings_QuadraticEaseIn">Avalonia.Animation.Easings.QuadraticEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_QuadraticEaseInOut">Avalonia.Animation.Easings.QuadraticEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_QuadraticEaseOut">Avalonia.Animation.Easings.QuadraticEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_QuarticEaseIn">Avalonia.Animation.Easings.QuarticEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_QuarticEaseInOut">Avalonia.Animation.Easings.QuarticEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_QuarticEaseOut">Avalonia.Animation.Easings.QuarticEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_QuinticEaseIn">Avalonia.Animation.Easings.QuinticEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_QuinticEaseInOut">Avalonia.Animation.Easings.QuinticEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_QuinticEaseOut">Avalonia.Animation.Easings.QuinticEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_SineEaseIn">Avalonia.Animation.Easings.SineEaseIn</a><br /><a href="T_Avalonia_Animation_Easings_SineEaseInOut">Avalonia.Animation.Easings.SineEaseInOut</a><br /><a href="T_Avalonia_Animation_Easings_SineEaseOut">Avalonia.Animation.Easings.SineEaseOut</a><br /><a href="T_Avalonia_Animation_Easings_SplineEasing">Avalonia.Animation.Easings.SplineEasing</a><br /><a href="T_Avalonia_Animation_Easings_SpringEasing">Avalonia.Animation.Easings.SpringEasing</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Animation_Easings_IEasing">IEasing</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Animation_Easings_Easing__ctor">Easing()</a></td>
<td>Initializes a new instance of the Easing class</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Animation_Easings_Easing_Ease">Ease(Double)</a></td>
<td>Returns the value of the transition for the specified progress.</td>
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
<td><a href="M_Avalonia_Animation_Easings_Easing_Parse">Parse(String)</a></td>
<td>Parses a Easing type string.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Animation_Easings">Avalonia.Animation.Easings Namespace</a>  
