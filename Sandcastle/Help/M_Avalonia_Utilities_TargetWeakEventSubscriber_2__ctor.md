---
title:TargetWeakEventSubscriber&lt;TTarget, TEventArgs&gt; Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TargetWeakEventSubscriber&lt;TTarget, TEventArgs&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_Utilities_TargetWeakEventSubscriber_2">TargetWeakEventSubscriber(TTarget, TEventArgs)</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public TargetWeakEventSubscriber(
	TTarget target,
	Action<TTarget, Object?, WeakEvent, TEventArgs> dispatchFunc
)
```
**VB**
``` VB
Public Sub New ( 
	target As TTarget,
	dispatchFunc As Action(Of TTarget, Object, WeakEvent, TEventArgs)
)
```
**F#**
``` F#
new : 
        target : 'TTarget * 
        dispatchFunc : Action<'TTarget, Object, WeakEvent, 'TEventArgs> -> TargetWeakEventSubscriber
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Utilities_TargetWeakEventSubscriber_2">TTarget</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-4" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Utilities_TargetWeakEventSubscriber_2">TTarget</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Utilities_WeakEvent">WeakEvent</a>, <a href="T_Avalonia_Utilities_TargetWeakEventSubscriber_2">TEventArgs</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_TargetWeakEventSubscriber_2">TargetWeakEventSubscriber(TTarget, TEventArgs) Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
