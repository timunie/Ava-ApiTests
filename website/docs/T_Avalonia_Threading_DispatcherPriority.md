# DispatcherPriority Structure


Defines the priorities with which jobs can be invoked on a <a href="T_Avalonia_Threading_Dispatcher">Dispatcher</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct DispatcherPriority : IEquatable<DispatcherPriority>, 
	IComparable<DispatcherPriority>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure DispatcherPriority
	Implements IEquatable(Of DispatcherPriority), IComparable(Of DispatcherPriority)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type DispatcherPriority = 
    struct
        inherit ValueType
        interface IEquatable<DispatcherPriority>
        interface IComparable<DispatcherPriority>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherPriority.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  DispatcherPriority</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.icomparable-1" target="_blank" rel="noopener noreferrer">IComparable</a>(DispatcherPriority), <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(DispatcherPriority)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherPriority_Value">Value</a></td>
<td>The integer value of the priority</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_CompareTo">CompareTo(DispatcherPriority)</a></td>
<td>Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_Equals">Equals(DispatcherPriority)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_Equals_1">Equals(Object)</a></td>
<td>Indicates whether this instance and a specified object are equal.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_FromValue">FromValue(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_GetHashCode">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_Validate">Validate(DispatcherPriority, String)</a></td>
<td> </td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_Equality">Equality(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_GreaterThan">GreaterThan(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_GreaterThanOrEqual">GreaterThanOrEqual(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_Implicit">Implicit(DispatcherPriority to Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_Implicit_1">Implicit(Int32 to DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_Inequality">Inequality(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_LessThan">LessThan(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_LessThanOrEqual">LessThanOrEqual(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_ApplicationIdle">ApplicationIdle</a></td>
<td>The job will be processed when the application is idle.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Background">Background</a></td>
<td>The job will be processed after other non-idle operations have completed.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_ContextIdle">ContextIdle</a></td>
<td>The job will be processed after background operations have completed.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Default">Default</a></td>
<td>The lowest foreground dispatcher priority</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Inactive">Inactive</a></td>
<td>A dispatcher priority for jobs that shouldn't be executed yet</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Input">Input</a></td>
<td>The job will be processed with the same priority as input.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Invalid">Invalid</a></td>
<td>Used internally in dispatcher code</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Loaded">Loaded</a></td>
<td>The job will be processed after layout and render but before input.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_MaxValue">MaxValue</a></td>
<td>Maximum possible priority</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Normal">Normal</a></td>
<td>The job will be processed with normal priority.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Render">Render</a></td>
<td>The job will be processed with the same priority as render.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Send">Send</a></td>
<td>The job will be processed before other asynchronous operations.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_SystemIdle">SystemIdle</a></td>
<td>The job will be processed when the system is idle.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

