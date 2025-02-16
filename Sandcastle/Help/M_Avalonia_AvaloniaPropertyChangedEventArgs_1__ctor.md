---
title:AvaloniaPropertyChangedEventArgs&lt;T&gt; Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AvaloniaPropertyChangedEventArgs&lt;T&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs(T)</a> class



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public AvaloniaPropertyChangedEventArgs(
	AvaloniaObject sender,
	AvaloniaProperty<T> property,
	Optional<T> oldValue,
	BindingValue<T> newValue,
	BindingPriority priority
)
```
**VB**
``` VB
Public Sub New ( 
	sender As AvaloniaObject,
	property As AvaloniaProperty(Of T),
	oldValue As Optional(Of T),
	newValue As BindingValue(Of T),
	priority As BindingPriority
)
```
**F#**
``` F#
new : 
        sender : AvaloniaObject * 
        property : AvaloniaProperty<'T> * 
        oldValue : Optional<'T> * 
        newValue : BindingValue<'T> * 
        priority : BindingPriority -> AvaloniaPropertyChangedEventArgs
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">T</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">T</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">T</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs(T) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
