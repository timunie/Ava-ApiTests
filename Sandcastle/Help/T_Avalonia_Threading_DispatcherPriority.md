---
title:DispatcherPriority Structure
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DispatcherPriority Structure




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public readonly struct DispatcherPriority : IEquatable<DispatcherPriority>, 
	IComparable<DispatcherPriority>
```
**VB**
``` VB
Public Structure DispatcherPriority
	Implements IEquatable(Of DispatcherPriority), IComparable(Of DispatcherPriority)
```
**F#**
``` F#
[<SealedAttribute>]
type DispatcherPriority = 
    struct
        inherit ValueType
        interface IEquatable<DispatcherPriority>
        interface IComparable<DispatcherPriority>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  DispatcherPriority</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.icomparable-1" target="_blank" rel="noopener noreferrer">IComparable</a>(DispatcherPriority), <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(DispatcherPriority)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Threading_DispatcherPriority_Value">Value</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_CompareTo">CompareTo(DispatcherPriority)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_Equals">Equals(DispatcherPriority)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_FromValue">FromValue(Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_Validate">Validate(DispatcherPriority, String)</a></td>
<td> </td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_Equality">Equality(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_GreaterThan">GreaterThan(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_GreaterThanOrEqual">GreaterThanOrEqual(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_Implicit">Implicit(DispatcherPriority to Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_Implicit_1">Implicit(Int32 to DispatcherPriority)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_Inequality">Inequality(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_LessThan">LessThan(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Threading_DispatcherPriority_op_LessThanOrEqual">LessThanOrEqual(DispatcherPriority, DispatcherPriority)</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_ApplicationIdle">ApplicationIdle</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_AsyncRenderTargetResize">AsyncRenderTargetResize</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Background">Background</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_BeforeRender">BeforeRender</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_ContextIdle">ContextIdle</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Default">Default</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Inactive">Inactive</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Input">Input</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Invalid">Invalid</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Loaded">Loaded</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_MaxValue">MaxValue</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Normal">Normal</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Render">Render</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_Send">Send</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_SystemIdle">SystemIdle</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Avalonia_Threading_DispatcherPriority_UiThreadRender">UiThreadRender</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
